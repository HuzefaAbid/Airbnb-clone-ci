pipeline {
    agent any

    environment {
        APP_CONTAINER   = "nodeapp"
        MONGO_CONTAINER = "mongodb"
        HOST_PORT       = "4000"
    }

    triggers {
        // This allows the pipeline to be triggered automatically by GitHub webhook
        pollSCM('* * * * *')  // optional, real webhook recommended
    }

    stages {
        stage('Clone Repository') {
            steps {
                // Make sure your branch is 'main'
                git branch: 'main', url: 'https://github.com/your-username/Airbnb-clone-ci.git'
            }
        }

        stage('Stop Existing Containers') {
            steps {
                echo "Stopping any running containers..."
                sh 'docker-compose down || true'
            }
        }

        stage('Build & Start Containers') {
            steps {
                echo "Starting containers using docker-compose..."
                sh 'docker-compose up -d'
            }
        }

        stage('Verify Deployment') {
            steps {
                echo "Checking if containers are running..."
                sh "docker ps | grep ${APP_CONTAINER}"
                sh "docker ps | grep ${MONGO_CONTAINER}"
                echo "App should now be available at http://<EC2-Public-IP>:${HOST_PORT}"
            }
        }
    }

    post {
        always {
            echo "Pipeline finished."
        }
    }
}

