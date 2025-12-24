pipeline {
    agent any

    environment {
        SONAR_HOST_URL = 'https://sonarcloud.io'
        SONAR_TOKEN    = '68bcaa279bf438cdb53995948d132b89a6a6885b'
        SONAR_ORGANIZATION = 'nassimeelkamari'
        SONAR_PROJECT_KEY  = 'nassimeelkamari_workshop3'
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/NassimeElkamari/workshop2-Groupe3.git'
            }
        }

        stage('Install dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run tests with coverage') {
            steps {
                bat 'set NODE_ENV=test&& npm test'
            }
        }

        stage('OWASP Dependency-Check') {
            steps {
                bat """
                docker run --rm ^
                  -v "%CD%:/src" ^
                  owasp/dependency-check ^
                  --scan /src ^
                  --format HTML ^
                  --out /src/dependency-check-report
                """
            }
        }

        stage('SonarCloud Analysis') {
            steps {
                bat """
                C:\\sonar-scanner\\bin\\sonar-scanner.bat ^
                  -Dsonar.host.url=%SONAR_HOST_URL% ^
                  -Dsonar.token=%SONAR_TOKEN% ^
                  -Dsonar.organization=%SONAR_ORGANIZATION% ^
                  -Dsonar.projectKey=%SONAR_PROJECT_KEY%
                """
            }
        }
    }
}