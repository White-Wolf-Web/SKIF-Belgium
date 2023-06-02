
export const handleDocumentDownload = async (documentId, language = 'fr') => {
  try {
    const lang = language.toUpperCase();
    const response = await fetch(
      `https://skifb-admin.be/api/DocumentsApi/DownloadDocument?id=${documentId}&&versionFile=${lang}`
    );
    const data = await response.blob();
    const url = window.URL.createObjectURL(data);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `document_${documentId}.pdf`);
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  } catch (error) {
    console.error("Erreur lors du téléchargement du document:", error);
  }
};
