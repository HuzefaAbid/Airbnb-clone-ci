pipeline {
    agent any

    environment {
        APP_CONTAINER   = "nodeapp"
        MONGO_CONTAINER = "mongodb"
        HOST_PORT       = "3000"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/HuzefaAbid/Airbnb-clone-ci.git'
            }
        }

        stage('Stop Existing Containers') {
            steps {
                echo "Stopping any existing containers..."
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
                echo "Your web app should be accessible at http://13.201.9.80:${HOST_PORT}"
            }
        }
    }

    post {
        always {
            echo "Jenkins pipeline finished."
        }
    }
}
