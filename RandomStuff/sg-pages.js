// 1 - Meno Func




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

    first = (page) => {
      const res = await getContent(page);
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
}

// we need to use this function to fire the query function ASAP and the render function ASAP
const queryFastAndSequential = async (pages, render) => {
    const worker = new AsyncWorker(6);
    const contentStore = new Map();
    pages.forEach(async page => {
      const res = await worker.add(query, page);
      contentStore.set(page, true)
    });
    for (let i = 0 ; i < pages.length; i++) {
      if (contentStore.get(pages[i])) {
        render(pages[i]);
      } else {
        const res = await worker.first(query, page);
        render(pages[i]);
      }
    }
    // write your code logic here
}

queryFastAndSequential(pages, render);
