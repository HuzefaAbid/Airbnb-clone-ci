pipeline {
    agent any

    environment {
        DOCKER_COMPOSE_FILE = "docker-compose-ci.yml"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/HuzefaAbid/Airbnb-clone.git'
            }
        }

        stage('Build & Start Containers') {
            steps {
                script {
                    sh "docker compose -f $DOCKER_COMPOSE_FILE down || true"
                    sh "docker compose -f $DOCKER_COMPOSE_FILE up -d --build"
                }
            }
        }

        stage('Verify') {
            steps {
                sh "docker ps"
            }
        }
    }

    post {
        always {
            echo 'CI/CD pipeline finished'
        }
    }
}
