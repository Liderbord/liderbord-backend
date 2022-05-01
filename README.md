# liderbord-backend
Backend code for Liderbord


# Deploy

Ensure you have the moralis cli, NEVER deloy the cloud functions by copy pasting them on the console.
`npm install -g moralis-admin-cli`

### Deplot without .env file

You can get the .evn file on notion, you might need to update your cloudfolder path

```bash
moralis-admin-cli watch-cloud-folder --autoSave 1
```
### Deploy without .env file

```bash
 moralis-admin-cli watch-cloud-folder --moralisApiKey API_KEY --moralisApiSecret API_SECRET --moralisSubdomain SERVER_URL --autoSave 1 --moralisCloudfolder PATH
```
