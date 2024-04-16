
export const Course = (props)=>{

    return(
        <>
            <div>{props.course.map(
                (course)=>{
                    return(
                        <div key={course.id}>
                            <h2>{course.name}</h2>
                            <div>{
                                course.parts.map((course)=><p key={course.id}>{course.name} {course.exercises}</p>)
                                }
                            </div>
                            <h3>
                                Total: {""}
                                {
                                    course.parts.reduce((acc,cv)=>acc+cv.exercises,0)
                                }
                                {""} exercises
                            </h3>
                        </div>
                    )}
                )}
            </div>
        </>
    )
};
