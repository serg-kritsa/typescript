// https://www.typescriptlang.org/docs/handbook/utility-types.html

// Partial<Type>
// Constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type.
function partial_demo_01(){
  interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
  }
  function createCourseGoal(
    title: string,
    description: string,
    date: Date
  ): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    // return courseGoal; // error: mismatch return type
    return courseGoal as CourseGoal;
  }
  createCourseGoal('A', 'S', new Date());
}
function partial_demo_02(){
    interface Todo {
        title: string;
        description: string;
    }
    
    function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
        return { ...todo, ...fieldsToUpdate };
    }
    
    const todo1 = {
        title: "organize desk",
        description: "clear clutter",
    };
    
    const todo1Updated = updateTodo(todo1, {
        description: "throw out trash",
    });

    console.log(todo1Updated);
}

// Required<Type>
// Constructs a type consisting of all properties of Type set to required. The opposite of Partial.
function required_demo_01(){
  interface Props {
    a?: number;
    b?: string;
  }
   
  const obj1: Props = { a: 5 };
  console.log(obj1);
   
  // const obj2: Required<Props> = { a: 5 };
  // Property 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'.
  
  const obj3: Required<Props> = { a: 5, b: 'A' };
  console.log(obj3);
  
}
// Readonly<Type>
// Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned.
function readonly_demo_01(){
  interface Todo {
    title: string;
  }
   
  const todo: Readonly<Todo> = {
    title: "Delete inactive users",
  };
  console.log(todo);
   
  // todo.title = "Hello";
  // Cannot assign to 'title' because it is a read-only property.
}

function readonly_demo_02(){
  const names: Readonly<string[]> = ['Max', 'Anna']; // as final
  console.log(names);
  // names.push('Manu');
  // names.pop();
}