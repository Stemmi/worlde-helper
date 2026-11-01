import "dotenv/config";
import { resolve } from "node:path";
import SftpClient from "ssh2-sftp-client";

const {
  SFTP_HOST,
  SFTP_PORT = "22",
  SFTP_USER,
  SFTP_PASSWORD,
  SFTP_REMOTE_DIR,
} = process.env;

const missing = Object.entries({
  SFTP_HOST,
  SFTP_USER,
  SFTP_PASSWORD,
  SFTP_REMOTE_DIR,
})
  .filter(([, value]) => !value)
  .map(([name]) => name);

if (missing.length > 0) {
  console.error(
    `Missing required environment variables: ${missing.join(", ")}`,
  );
  process.exit(1);
}

const sftp = new SftpClient();

try {
  await sftp.connect({
    host: SFTP_HOST,
    port: Number(SFTP_PORT),
    username: SFTP_USER,
    password: SFTP_PASSWORD,
  });

  await sftp.mkdir(SFTP_REMOTE_DIR, true);
  await sftp.uploadDir(resolve("dist"), SFTP_REMOTE_DIR);
  console.log(`Uploaded dist/ to ${SFTP_REMOTE_DIR} over SFTP`);
} catch (error) {
  console.error("SFTP deployment failed:", error.message);
  process.exitCode = 1;
} finally {
  await sftp.end();
}
