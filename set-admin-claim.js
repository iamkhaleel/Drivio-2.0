// set-admin-claim.js
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccount.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

async function main() {
  const uid = '<USER_UID>'; // paste the UID from Firebase Console → Authentication
  await admin.auth().setCustomUserClaims(uid, { admin: true });
  console.log('Admin claim set for', uid);
}
main()
  .then(() => process.exit(0))
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
