// Promise
const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// query function of which is used to request the page content from the server side
const query = page => {
    return new Promise(resolve => {
        const timeout = Math.random() * 1000;
        setTimeout(() => resolve(page), timeout);
    })
}
// render function of which is used to render the page content
const render = page => console.log(page)


class AsyncWorker {
    waitList = [];
    count = 0;
    
    constructor(limit) {
        this.limit = limit;
    }

    first = async (page) => {
      const res = await query(page);
      return res;
    }

    add = async (getContent, page) => {      
        if (this.count >= this.limit) {
            this.waitList.push(getContent);
        }
        this.count ++;
        const res = await getContent(page);
        if (this.waitList.length > 0) {
            this.waitList.shift()(page);
        }
        return res;
    }
  
    batchAdd = (getContent, ...data) => {
      return Promise.all(data.map(d => getContent(d)));
    }
}

class FakeObservableMap {
  map = new Map();

  onSuccess;
  
  constructor(onSuccess) {
    this.onSuccess = onSuccess;
  }
  
  set = (key, val) => {
    this.map.set(key, val);
    this.onSuccess(key, val);
  }
}

// we need to use this function to fire the query function ASAP and the render function ASAP
const queryFastAndSequential = async (pages, render) => {
    const size = 6;
    const worker = new AsyncWorker(render);

    const results = Array(pages.size).fill(undefined);
    const checkAndRenderIfAvaliable = () => {
      for (let i = 0; i <= results.length; i++) {
        const resultOrUndefined = results[i];
        if (!resultOrUndefined) {
          break;
        } if (!resultOrUndefined.printed) {
          render(resultOrUndefined.value)
          resultOrUndefined.printed = true;
        } else if (resultOrUndefined.printed) {
          continue;
        }
      }
    }

    const contentStore = new FakeObservableMap((key, val) => {
      results[key] = { value: val, printed: false };
      checkAndRenderIfAvaliable();
    });
  
    while (pages.length) {
      const pageSlice = pages.splice(0, size);
      const res = await worker.batchAdd(query, ...pageSlice);
      res.forEach((result, i) => {
        contentStore.set(i, result);
      });
    }
}

// 1. 根据分片调用
// 2. 每次 set 都会调用 avaliable
// 3. eventbus
// 4. 强行分片 promise.all

queryFastAndSequential(pages, render);
