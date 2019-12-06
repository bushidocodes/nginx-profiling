# NGINX simulation

Simulation of three simple Node.js servers with simulated load of 1s, 5s, and 10s behind NGINX distributing requests in a round-robin fashion.

This is used to assess methods of measuring upstream request time.

To start, run `docker-compose up`

Then use a tool like curl to issue `curl localhost:8080` repeatedly to load balance with sumulated load

The resulting logs are bind mounted to `./load-balancer/logs/access.log` on the host.

```
[06/Dec/2019:21:09:44 +0000] GET / HTTP/1.1 -172.26.0.3:1337 returned 200 in 1.014 seconds
[06/Dec/2019:21:09:50 +0000] GET / HTTP/1.1 -172.26.0.2:1337 returned 200 in 5.014 seconds
[06/Dec/2019:21:10:01 +0000] GET / HTTP/1.1 -172.26.0.4:1337 returned 200 in 10.023 seconds
[06/Dec/2019:21:10:07 +0000] GET / HTTP/1.1 -172.26.0.3:1337 returned 200 in 1.003 seconds
[06/Dec/2019:21:10:12 +0000] GET / HTTP/1.1 -172.26.0.2:1337 returned 200 in 5.007 seconds
[06/Dec/2019:21:10:23 +0000] GET / HTTP/1.1 -172.26.0.4:1337 returned 200 in 10.008 seconds
[06/Dec/2019:21:10:25 +0000] GET / HTTP/1.1 -172.26.0.3:1337 returned 200 in 1.002 seconds
[06/Dec/2019:21:11:19 +0000] GET / HTTP/1.1 -172.26.0.2:1337 returned 200 in 1.014 seconds
[06/Dec/2019:21:11:24 +0000] GET / HTTP/1.1 -172.26.0.3:1337 returned 200 in 5.015 seconds
[06/Dec/2019:21:11:35 +0000] GET / HTTP/1.1 -172.26.0.4:1337 returned 200 in 10.023 seconds
```

If you would prefer to loadbalance to NOOP type functions, issue `curl localhost:8080/noop` repeatedly