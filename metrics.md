# Metrics Usage Guide

This guide provides instructions on using the Prometheus metrics exposed by MySQL_Express_MetricHub and querying them using PromQL.

## Prometheus Metrics

The following metrics are available for monitoring and analysis:

##### 1. Total number of HTTP response status codes by status code 200 

```promql
http_response_status_code_total{status="200"}
```

##### 2. Time taken for HTTP response in milliseconds by POST method

```promql
http_response_time_ms{method="POST"}
```
##### 3. Total number of HTTP response times in milliseconds (using quantile) 


```promql
http_total_response_time_ms{method="GET"}
```
##### 4. Duration of the database query execution for all records (SELECT *) in milliseconds

```promql
database_query_exec_all_record_duration_ms
```
##### 5. Duration of the database query execution for one record (SELECT * LIMIT 1) in milliseconds

```promql
database_query_exec_one_record_duration_ms
```

##### 6. Summary of total response time 

```promql
http_total_response_time_ms_sum
```

##### 7. Counter of total response 

```promql
http_total_response_time_ms_count
```

##### 8. Average response time per http method 

```promql
avg(http_total_response_time_ms_sum/http_total_response_time_ms_count)
```

##### 9. Rate response time in recent 30 minute  

```promql
rate(http_total_response_time_ms_count [30m])
```

### Prometheus Web UI
Open your browser and go to the Prometheus web UI (typically accessible at http://localhost:9090).

In the "Graph" tab, you can enter PromQL queries to visualize and analyze metrics.

Use the provided examples above to create custom queries for monitoring different aspects of your application.

Explore additional features in the Prometheus UI to gain insights into your application's performance.