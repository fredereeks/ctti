// Excel = application/vnd.ms-excel (xls) and application/vnd.vnd.openxmlformats-officedocument.spreadsheetml.sheet
export const downloader = (data: string[], fileName: string, type = "application/octect-stream") => {
    const blob = new Blob([...data], { type })
    const url = URL.createObjectURL(blob)
    const link = Object.assign(document.createElement("a"), {
        href: url,
        download: fileName,
        style: {display: "none"}
    })
    document.body.appendChild(link)
    link.click();
    URL.revokeObjectURL(url)
    link.remove()
}