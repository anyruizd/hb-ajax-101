export default class InfoCards {
    static getString ({title, body}) {
        return (
            `<article>
                <h2>${title}</h2>
                <p>${body}</p>
            </article>`
        )
    }
}