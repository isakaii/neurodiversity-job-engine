gcloud builds submit --config cloudmigrate.yaml --substitutions _INSTANCE_NAME=jobmatching,_REGION=us-west2

gcloud run deploy jobmatching-service --platform managed --region us-west2 --image gcr.io/som-ai-neurodiversitymatcher/jobmatching-service --add-cloudsql-instances som-ai-neurodiversitymatcher:us-central1:jobmatching --allow-unauthenticated

