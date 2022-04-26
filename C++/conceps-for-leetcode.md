Chinese Resource: [http://c.biancheng.net/cplus/](http://c.biancheng.net/cplus/)

English Resource: [cplusplus.com](https://www.cplusplus.com/)

## [Containers](https://www.cplusplus.com/reference/stl/)

### vector
> Vectors are sequence containers representing arrays that can change in size.
```c++
vector<int> nums; // didn't set size 
vector<int> nums(n); // set size to n
nums.push_back(1); // add to the end
nums[7] = 1; // set a value in vertain address
nums.resize(nums.size() - i); // delate the last i numbers
nums.pop_back(); // delete the last number

// two-dimensional vector
vector< vector<int> > nums(m, vector<int>(n)); // m * n


vector< vector<int> > nums;
nums.resize(m);
for (int i = 0; i < m.size(); i++) nums[i].resize(n);


vector< vector<int> > nums;
nums.resize(m, vector<int>(n));

//initialize all elements to zero
vector< vector<int> > nums(m, vector<int>(n, 0));

```

### unordered_map
> Unordered maps are associative containers that store elements formed by the combination of a key value and a mapped value, and which allows for fast retrieval of individual elements based on their keys.