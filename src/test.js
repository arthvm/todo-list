function testLog() {
  console.log("Running on Dev Mode");
}

if (process.env.NODE_ENV !== "production") {
  testLog();
}
