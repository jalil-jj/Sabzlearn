import Index from './Pages/Index/Index'
import ArticleInfo from './Pages/ArticleInfo/ArticleInfo'
import CourseInfo from './Pages/CourseInfo/CourseInfo'
import Category from './Pages/Category/Category'

const routes = [
    { path : '/' , element : <Index /> } , 
    { path : '/course-info/:courseName' , element : <CourseInfo /> } , 
    { path : '/category-info/:categoryName' , element : <Category /> } , 
    { path : '/article-info/:articleName' , element : <ArticleInfo /> } , 
]

export default routes