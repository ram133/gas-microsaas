function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "API Endpoint Active" }))
    .setMimeType(ContentService.MimeType.JSON);
}
