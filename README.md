# MySQL Express MetricHub

MySQL_Express_MetricHub is a Node.js project built with the Express framework to generate Prometheus metrics related to MySQL database performance.

The project includes a pre-built database table to facilitate comprehensive evaluation of query writing and data processing times within the database.

## Prerequisites

Before running the application using **Docker Compose**, make sure you have the following:

- **Docker**
- **Docker-Compose** OR **Docker compose**

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/MoeinTavakoli/MySQL_Express_MetricHub.git
```

Navigate to the project directory:

```bash
cd MySQL_Express_MetricHub
```

Copy the example environment file and fill in the required details

Open the .env file and provide the configuration.

```bash
cp .env.example .env
nano .env
```

The next step, need directory to persist prometheus data 

```bash
sudo mkdir /var/lib/prometheus-data/ ; sudo chown 65534:65534 /var/lib/prometheus-data/
```

Start the application using Docker Compose:

```bash
docker-compose up
```

The application will be accessible at http://localhost:3000.

And Prometheus will be accessible at http://localhost:9090.

## Prometheus Metrics

The following Prometheus metrics have been implemented in this project:

#### 1. http_response_status_code_total
   - **Help**: Total number of HTTP response status codes.
   - **Metric Type**: Counter
   - **Label Names**: method, status

#### 2. http_response_time_ms
   - **Help**: Time taken for HTTP response in milliseconds.
   - **Metric Type**: Gauge
   - **Label Names**: method, status

#### 3. http_total_response_time_ms
   - **Help**: Total number of HTTP response times in milliseconds.
   - **Metric Type**: Summary
   - **Label Names**: method

#### 4. database_query_exec_all_record_duration_ms
   - **Help**: Duration of the database query execution for all records in milliseconds.
   - **Metric Type**: Gauge

#### 5. database_query_exec_one_record_duration_ms
   - **Help**: Duration of the database query execution for one record in milliseconds.
   - **Metric Type**: Gauge
  
More information about metrics and usage can be accessed at [here](./metrics.md)