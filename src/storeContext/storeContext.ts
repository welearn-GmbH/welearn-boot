


const storeContext = async () => {
    const courses = await (await fetch("https://api-gateway.wehorse-stage.com/v3/de/course?offset=0&limit=10&categorySlug[]=bodenarbeit"))
    const courseJson = await courses.json()
    return courseJson.courseCards
}

export default storeContext