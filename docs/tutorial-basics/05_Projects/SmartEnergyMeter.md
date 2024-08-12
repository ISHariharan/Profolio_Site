---
sidebar_position: 2
---

# Smart Energy Meter Project

## Explore the Project

[![Visit Smart Energy Meter on GitHub](https://img.shields.io/badge/Visit%20Smart%20Energy%20Meter%20on%20GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ISHariharan/Smart-energy-meter)


## Introduction

The Smart Energy Meter project exemplifies the application of IoT technologies in energy management and efficiency. This project integrates a smart energy meter system designed to monitor, measure, and analyze the energy consumption of electrical appliances. Leveraging various sensors and a microcontroller, the system captures real-time data, processes it, and provides actionable insights to users.

### Objective

To develop a smart energy meter that tracks voltage, current, and power consumption of electrical devices, alerts users to potential issues, and facilitates energy efficiency through real-time monitoring and automated notifications.

## Literature Survey

The integration of IoT in smart home applications has been widely researched, focusing on enhancing energy efficiency and user convenience. Studies, such as those by Adeyemo and Olaiya (2012), have explored data mining techniques for weather prediction, which can be applied to optimize energy management. Despite advancements, real-time integration of sensor data with web-based control systems continues to be a significant area of innovation. This project builds on these insights by implementing a system that combines sensor data with server-side processing for real-time monitoring and alerts.

## Proposed System Architecture

## Components

### ESP32 Microcontroller
- Acts as the central controller, interfacing with sensors to capture data and transmit it to a local server.

### Voltage Sensor (ZMPT101B)
- Measures the voltage of the appliance.

### Current Sensor (SCT103)
- Measures the current flowing through the appliance.

### Local Server (PHP with MySQL)
- Receives and processes sensor data, stores it in a database, and calculates power consumption.

### Web Interface
- Displays real-time data and triggers alerts for high power consumption.

## Workflow

### Sensor Data Acquisition
- The ESP32 reads voltage and current data from the sensors.

### Data Transmission
- The ESP32 sends the data to a PHP script on the local server via HTTP POST requests.

### Server-side Processing
- The PHP script processes the incoming data, calculates power consumption, and stores the results in a MySQL database.

### Real-time Monitoring
- The web interface displays the voltage, current, and power consumption data, providing users with an overview of their energy usage.

### Alerts
- An audio buzzer activates if power consumption exceeds a predefined threshold, alerting users to potential issues.

## IV. Algorithms and Experimental Results

### Algorithms

<details>
<summary>Voltage Measurement</summary>

- **Formula:** Voltage = sensorValue * (5.0 / 1023.0) * voltage_calibration_factor
- Converts the sensor value to voltage using the provided formula.

</details>

<details>
<summary>Current Measurement</summary>

- **Formula:** Current = sensorValue * (5.0 / 1023.0) * (30.0 / 5.0) * current_calibration
- Converts the sensor value to current using the provided formula.

</details>

<details>
<summary>Power Calculation</summary>

- **Formula:** Power = voltage * current
- Computes the power consumption based on voltage and current readings.

</details>

### Experimental Results

<details>
<summary>Measurement Accuracy</summary>

- The sensors provide accurate measurements within a reasonable tolerance.
- Calibration factors ensure that readings are precise in real-world conditions.

</details>

<details>
<summary>Data Transmission</summary>

- Data is reliably transmitted from the ESP32 to the local server via HTTP POST requests.
- The PHP script processes the data effectively, storing it in a MySQL database and enabling real-time monitoring.

</details>


## V. Performance Analysis

The smart energy meter system successfully monitors and manages energy consumption by capturing and analyzing data from voltage and current sensors. The ESP32 microcontroller, local server, and web interface work together to provide real-time energy monitoring. The system’s threshold mechanism ensures prompt alerts for high power consumption, facilitating better energy management and contributing to overall efficiency in smart home environments.

### Key Benefits

:::note
Users can track their energy usage live, with immediate updates and alerts for potential issues.
:::

:::note
The system helps identify energy wastage and supports informed decision-making for energy management.
:::

:::note
A web interface provides a user-friendly experience for monitoring and managing energy consumption.
:::

