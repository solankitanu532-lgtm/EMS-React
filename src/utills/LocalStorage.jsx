
const employees = [
  {
    id: 1,
    firstName: "Rahul",
    email: "employee1@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      { 
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare Report",
        description: "Prepare monthly sales report",
        date: "2026-01-20",
        category: "Reporting"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Team Meeting",
        description: "Attend weekly team meeting",
        date: "2026-01-15",
        category: "Meeting"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Client Follow-up",
        description: "Follow up with old client",
        date: "2026-01-10",
        category: "Client"
      }
    ]
  },
  {
    id: 2,
    firstName: "Amit",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Fix Bugs",
        description: "Fix UI bugs in dashboard",
        date: "2026-01-21",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Code Review",
        description: "Review teammate’s code",
        date: "2026-01-18",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: false,
        title: "Update Docs",
        description: "Update project documentation",
        date: "2026-01-22",
        category: "Documentation"
      }
    ]
  },
  {
    id: 3,
    firstName: "Priya",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design Banner",
        description: "Create banner for website",
        date: "2026-01-23",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Logo Update",
        description: "Update company logo",
        date: "2026-01-14",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: false,
        title: "Image Optimization",
        description: "Optimize website images",
        date: "2026-01-24",
        category: "Design"
      }
    ]
  },
  {
    id: 4,
    firstName: "Sandeep",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Database Backup",
        description: "Take database backup",
        date: "2026-01-21",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Server Check",
        description: "Check server health",
        date: "2026-01-17",
        category: "IT"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Security Patch",
        description: "Apply security patch",
        date: "2026-01-16",
        category: "Security"
      }
    ]
  },
  {
    id: 5,
    firstName: "Neha",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Customer Support",
        description: "Resolve customer tickets",
        date: "2026-01-22",
        category: "Support"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Email Responses",
        description: "Reply to customer emails",
        date: "2026-01-19",
        category: "Support"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: false,
        title: "Feedback Analysis",
        description: "Analyze customer feedback",
        date: "2026-01-25",
        category: "Analysis"
      }
    ]
  }
];


const admin = [
  {
    id: 101,
    email: "admin@example.com",
    password: "123"
  }
];


export const setLocalStorage = () =>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))

}
export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
 
    return {employees,admin}
}