'use server';

export default async function GetFileInfo() {
  return {
    dir: __dirname,
    file: __filename,
    cwd: process.cwd(),
  }
};