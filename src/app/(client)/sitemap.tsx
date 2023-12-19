import { categories, courses } from "@/data";


export default async function SiteMap() {
    const allCategories = courses.map(course => (
        {
            url: `https://ctti.ng/courses/${course.category.toLowerCase().replaceAll(" ", "-")}`,
            lastModified: new Date()
        }
    ))
    const allCourses = courses.map(course => (
        {
            url: `https://ctti.ng/courses/${course.category.toLowerCase().replaceAll("-", " ")}/${course.id.toString()}`,
            lastModified: new Date()
        }
    ))
  return [
    {
        url: "https://ctti.ng",
        lastModified: new Date()
    },
    ...allCategories,
    ...allCourses
  ]
}
