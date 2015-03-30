# async.each_map_eachSeries_mapLimit

In each folder, run 'npm install async'

In folder 01, use the method of async.each(messages, send, cb), the tasks excute in parallel. 

In folder 02, using the method of async.map(messages,send, cb), the tasks excute in parallet, also map the results to the callback function. 

In folder 03, using the method of async.eachSeries(messages, send, cb), the tasks excute one by one.

In folder 04, using the method of async.mapLimit(messages,2, send, cb), while can limit how many tasks excute in parallel, also map the results to the callback function. 
