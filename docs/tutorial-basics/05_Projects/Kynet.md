---
id: kynet
title: KYNET Real-Time Mobile Network Performance Prediction
sidebar_label: KYNET
sidebar_position: 2
---

## Overview
**KYNET (Know Your Network)** is a full-stack system I designed and developed to **predict mobile network performance in real time**.  
It provides users with predictions of:

- Download/Upload Speeds  
- Network Latency (Ping)  
- Signal Strength (RSRP – Reference Signal Received Power)  

:::info
Unlike conventional speed-test apps that only show *current* results, KYNET provides **future-oriented, real-time predictions** using **incremental ML models** that continuously adapt to new data.
:::



## Problem Statement
Mobile network performance is **non-stationary** — it changes dynamically with time, location, and environment. This creates several challenges:  

- Spatial Variability: Signal strength fluctuates between indoor/outdoor locations, across different floors, and even within the same building.  
- Temporal Variability: Networks behave differently during peak hours vs. late nights.  
- ISP Differences: Service quality varies between providers like Jio, Airtel, and BSNL.  
- Environmental Factors: Weather, temperature, and user mobility (walking vs. stationary) affect performance.  

### Gaps in Existing Solutions
- Traditional apps provide snapshot measurements but no predictive insights.  
- No public dataset existed for network speed and signal strength prediction.  
- Most ML approaches in this domain use batch learning, which fails to adapt to continuous data streams.  

:::warning
The lack of **public datasets** was a major bottleneck — without data, predictive ML models for mobile networks cannot be trained effectively.
:::

---

## Solution
To overcome these challenges, I created **KYNET**, an integrated platform consisting of a **data collection app, prediction models, and visualization tools**.

### 1. Data Collection Module
I built a **custom Android app** in Flutter to crowdsource real-world mobile network data.  
Over **21,000+ samples** were collected across Anna University campus.  

:::info
This dataset is one of the **first of its kind** — designed specifically for real-time mobile network prediction.
:::

Each record includes a rich set of **network, spatial, temporal, and environmental parameters**, such as:  

- **Network Quality Metrics**  
  - RSSI, RSRP, RSRQ, SINR  
  - RF-NC, p-a, Band, Num Carriers  
  - RS Path Loss, Timing Advance (TA), Shannon, Cell Load  
  - RF-RX0, RF-RX1, RF-RX2, RF-RX3  
  - RI Sum, CQI, CRI  

- **Temporal Information**  
  - Timestamp  
  - Day of Week (Mon–Sun)  
  - Type of Day (Weekday/Weekend)  
  - Time Period (Morning/Afternoon/Evening/Night)  

- **Network & ISP Details**  
  - ISP (Jio, Airtel, BSNL)  
  - Network Type (2G/3G/4G/5G)  
  - Download Speed, Upload Speed, Latency  
  - General Signal Strength  

- **Spatial & Environmental Context**  
  - Location Name, Latitude, Longitude  
  - Indoor/Outdoor environment  
  - Environment Type (Crowded/Free)  
  - Floor (if applicable)  
  - Weather & Temperature  



### 2. Prediction Engine
- **Models Used**:  
  - Adaptive Random Forest → location-based predictions  
  - Aggregated Mondrian Forest Regressor → speed & latency prediction  
- **Feature Engineering**:  
  - Split Latitude/Longitude → improved spatial accuracy  
  - Temporal encoding → captured peak/off-peak patterns  

:::tip
Using **incremental learning** allowed KYNET to continuously update its models without retraining from scratch — saving compute and enabling scalability.
:::



### 3. Location Prediction & Visualization
- Forecasted **best areas on campus** for connectivity.  
- Produced **heatmaps** and **overlays** for ISP-specific performance.  
- Offered **ranked location recommendations** for users.  



### 4. Real-Time User App
- Cross-platform Flutter app (Android/iOS ready).  
- Provides **instant predictions** of speed, latency, and signal strength.  
- Dashboards with **charts, time-series insights, and map visualizations**.  



## Technology Stack
- **Frontend (Mobile App)**: Flutter  
- **Backend**: Python (Flask REST APIs)  
- **Machine Learning**: Scikit-learn + River (incremental ML)  
- **Database**: SQLite  
- **Hosting**: Microsoft Azure VM  
- **Visualization**: Google Maps API, Flutter charts  


## Results
- **Model Accuracy**:  
  - Download speed → 91.97% (R²)  
  - Upload speed → 85.83% (R²)  

- **Real-time Predictions**:  
  - Latency, RSRP, speeds predicted instantly  
  - Incremental updates with new data  

- **Network Insights**:  
  - Best times/locations identified  
  - ISP quality comparisons (Jio vs Airtel vs BSNL)  

:::tip
KYNET is not just a research prototype — it was **deployed campus-wide** and validated with **21,000+ real samples**, making it practical and field-tested.
:::


## Novelty & Impact
- First-of-its-kind **crowdsourced dataset**.  
- **Incremental ML models** rarely applied in this domain.  
- **Spatial feature engineering** improved accuracy.  
- **Real-time recommender system** for end-users.  
- Multi-ISP support (Jio, Airtel, BSNL).  



## Screenshots
- Data Collection Interface  
- Real-Time Prediction Dashboard  
- Heatmaps (best zones for connectivity)  
- ISP Analysis  

*(Screenshots go in `static/img/kynet/`.)*  


## Key Learnings
- Designing **incremental ML pipelines** for streaming data.  
- Building datasets **from scratch** when none exist.  
- Bridging **research and practical application** in a mobile app.  

:::note
KYNET was both a **research project** and a **working system**, combining **machine learning, mobile development, and cloud engineering** in one project.
:::



## Links
:::info Thesis Report
You can download the full **KYNET Project Thesis** here:  
[📥 Download PDF](https://www.dropbox.com/scl/fi/iducxspo40nvt4pg0lfat/KYNET-Report-Thesis.pdf?rlkey=nif5we9ap3mo9l6bsi7s384a9&st=klgp6cik&dl=1)
:::
- [GitHub Repository](http://www.example.com/)  
- [Demo Video](http://www.example.com/)  

---
