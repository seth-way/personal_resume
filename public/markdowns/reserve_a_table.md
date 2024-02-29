While this project involved writing quite a bit of code and working with new technologies, the real challenge it presented was in designing and optimizing a system architecture.

I was given a working, legacy code base, with a react-based front-end, and tasked with optimizing its back end to handle large spikes in production level traffic.

The front end was for a restaurant review and reservation site.

This challenge was complex, and the overall system had many independent parts which could be optimized. And so, I chose to start from the furthest endpoint, the database, and work my way forward, validating my improvements along the way.

I started by choosing two potential Database Management Systems. I created schemas, seeding scripts, and test queries for these databases. I queried data sets for 10,000 unique restaurants and compared the results. I ultimately chose PostgreSQL for this application.

The application utilized a service-oriented architecture, where the main page is hosted on a proxy server and the individual components are hosted on separate instances. I chose to keep this architecture. (see diagram below)

![SOA](@/public/images/portfolio/images/SOA.jpg)

I then deployed and load tested the proxy server and the restaurant landing page service in order to establish benchmarks. I optimized the service by removing some middleware and pooling the database connection to keep it open. I stress tested again and saw improvements, but there were still unacceptable delays in response times under spikes heavy traffic.

After several iterations of optimizing, scaling, stress-testing the system, and determining the system’s bottleneck, I wound up with an architecture that had a load-balancer at its entry point, which directed traffic to six horizontally scaled proxy servers. These requested their components from a second load-balancer, which directed traffic to four service instances. These each drew from a single database instance. Each component was hosted on an AWS micro-server.

![scaled_architecture](@/public/images/portfolio/images/scaled_architecture.jpg)

Using this new architecture, I was able to increase throughput by over 350% to 1750 requests per second with an error rate of less than 1% and a response time of less than 2 seconds.
