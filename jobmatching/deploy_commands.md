gcloud builds submit --config cloudmigrate.yaml \
--substitutions _INSTANCE_NAME=jobmatching,_REGION=us-west2

gcloud run deploy polls-service --platform managed \
--region us-west2 --image gcr.io/som-ai-neurodiversitymatcher/polls-service \
--add-cloudsql-instances som-ai-neurodiversitymatcher:us-west2:jobmatching \
--allow-unauthenticated
