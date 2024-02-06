---
sidebar_position: 2
---
import BashTabs from '@site/src/components/generic/bashTabs'


# Installation

## Bootstrap
Let's create our CliNext app

### 1. Install dependencies
<BashTabs npm={"npm install -g generator-clinext"} />
<BashTabs npm={"npm install -g yo"} />

Get Docker:
https://docs.docker.com/get-docker/

### 2. Create a parent folder for the whole project
```bash
mkdir booklover
cd booklover
```

### 3. Launch docker server

Generate the environment:
```bash
mkdir infrastructure 
cd infrastructure
yo clinext:docker
```

Launch the environment:
```bash
docker compose --project-name booklover -f docker-compose.yml up -d
```

:::tip
For **manual installation** the docker file can be found here: **[docker-compose](../static/docker-compose.yaml)**
:::

### 4. Create the app
```bash
cd ..
```

```bash
yo clinext --appName Booklover --appId booklover
```

```bash
cd booklover
```

