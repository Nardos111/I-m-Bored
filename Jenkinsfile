pipeline {
  environment {
    PROJECT = "storied-lodge-311519"
    APP_NAME = "website"
    NAMESPACE = "website"
    IMAGE_TAG = "gcr.io/${PROJECT}/${APP_NAME}:${env.BRANCH_NAME}.${BUILD_NUMBER}"
  }
    agent {
        kubernetes {
            defaultContainer 'jnlp'
            yaml '''
apiVersion: v1
kind: Pod
spec:
  serviceAccountName: my-jenkins
  containers:
  - name: gcloud
    image: gcr.io/cloud-builders/gcloud
    command:
    - cat
    tty: true
  - name: kubectl
    image: gcr.io/cloud-builders/kubectl
    command:
    - cat
    tty: true
'''
        }
    }
    stages {
        stage('Gcloud Version') {
            steps {
                container ("gcloud"){
                    sh 'gcloud version'
                }
            }
        }
        stage('Build & Push') {
          steps {
            container('gcloud'){
              sh ('gcloud builds submit -t ${IMAGE_TAG} .')
            }
          }
        }
      
        stage('Deploy') {
          steps {
            container('kubectl'){
           // sh ('gcloud builds submit -t ${IMAGE_TAG} .')
              sh("sed -i.bak 's#gcr.io/gcr-project/sample:1.0.0#${IMAGE_TAG}#' ./k8s/*.yaml")
              sh("kubectl --namespace=${NAMESPACE} apply -f ./k8s/")
            }
          }
        }
    }
}