Set-Location .\clone

if (Test-Path .\v14.2.2) {

} else {
    git clone --depth 1 git@github.com:vercel/next.js.git v14.2.2
}

if (Test-Path ..\node_modules\next\src) {

} else {
    Copy-Item -Path .\v14.2.2\packages\next\src -Destination ..\node_modules\next -Recurse 
}