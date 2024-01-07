import React from "react";

const columns = [
  { name: "ID", uid: "id" },
  { name: "USERNAME", uid: "name", sortable: true },
  { name: "EMAIL", uid: "email" },
  { name: "NO.PRODUCTS", uid: "product"},
  { name: "NO.USERS", uid: "users"},
  { name: "PERCENTAGE", uid: "percentage"},
  { name: "ROLE", uid: "role", sortable: true },
  { name: "STATUS", uid: "status", sortable: true },
  { name: "DATE", uid: "date" },
  { name: "ACTIONS", uid: "actions" },
];

const statusOptions = [
  { name: "Active", uid: "active" },
  { name: "Paused", uid: "paused" },
  { name: "Vacation", uid: "vacation" },
];

const users = [
  {
    id: 1,
    name: "Tony Company",
    role: "Member",
    team: "Management",
    status: "active",
    age: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "tony.reichert@example.com",
    date: "NOV 12, 2023",
    users: 20,
    products: 100,
    percentage: 56,
  },
  {
    id: 2,
    name: "Zoey Company",
    role: "Member",
    team: "Development",
    status: "paused",
    age: "25",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "zoey.lang@example.com",
    date: "NOV 12, 2023",
    users: 20,
    products: 100,
    percentage: 56,
  },
  {
    id: 3,
    name: "Jane Company",
    role: "Member",
    team: "Development",
    status: "active",
    age: "22",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    email: "jane.fisher@example.com",
    date: "NOV 12, 2023",
    users: 20,
    products: 100,
    percentage: 56,
  },
  {
    id: 4,
    name: "William Company",
    role: "Member",
    team: "Marketing",
    status: "vacation",
    age: "28",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    email: "william.howard@example.com",
    date: "NOV 12, 2023",
    users: 70,
    products: 10,
    percentage: 56,
  },
  {
    id: 5,
    name: "Kristen Company",
    role: "Member",
    team: "Sales",
    status: "active",
    age: "24",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    email: "kristen.cooper@example.com",
    date: "NOV 12, 2023",
    users: 30,
    products: 800,
    percentage: 86,
  },
  {
    id: 6,
    name: "Brian Company",
    role: "Member",
    team: "Management",
    age: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "brian.kim@example.com",
    status: "Active",
    date: "NOV 12, 2023",
    users: 28,
    products: 1080,
    percentage: 96,
  },
  {
    id: 7,
    name: "Michael Company",
    role: "Member",
    team: "Design",
    status: "paused",
    age: "27",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29027007d",
    email: "michael.hunt@example.com",
    date: "NOV 12, 2023",
    bdcIdNumber: "NO-2345",
    users: 20,
    products: 180,
    percentage: 52,
  },
  {
    id: 8,
    name: "Samantha Company",
    role: "Member",
    team: "HR",
    status: "active",
    age: "31",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e27027008d",
    email: "samantha.brooks@example.com",
    date: "NOV 12, 2023",
    bdcIdNumber: "NO-2345",
    users: 80,
    products: 150,
    percentage: 52,
  },
  {
    id: 9,
    name: "Frank Company",
    role: "Member",
    team: "Finance",
    status: "vacation",
    age: "33",
    avatar: "https://i.pravatar.cc/150?img=4",
    email: "frank.harrison@example.com",
    date: "NOV 12, 2023",
    bdcIdNumber: "NO-2345",
    users: 20,
    products: 180,
    percentage: 52,
  },
  {
    id: 10,
    name: "Emma Company",
    role: "Member",
    team: "Operations",
    status: "active",
    age: "35",
    avatar: "https://i.pravatar.cc/150?img=5",
    email: "emma.adams@example.com",
    date: "NOV 12, 2023",
    bdcIdNumber: "NO-2345",
    users: 70,
    products: 180,
    percentage: 52,
  },
  {
    id: 11,
    name: "Brandon Company",
    role: "Member",
    team: "Development",
    status: "active",
    age: "22",
    avatar: "https://i.pravatar.cc/150?img=8",
    email: "brandon.stevens@example.com",
    date: "NOV 12, 2023",
    bdcIdNumber: "NO-2345",
    users: 720,
    products: 1890,
    percentage: 52,
  },
  {
    id: 12,
    name: "Megan Company",
    role: "Member",
    team: "Product",
    status: "paused",
    age: "28",
    avatar: "https://i.pravatar.cc/150?img=10",
    email: "megan.richards@example.com",
    date: "NOV 12, 2023",
    bdcIdNumber: "NO-2345",
    users: 20,
    products: 380,
    percentage: 82,
  },
  {
    id: 13,
    name: "Oliver Company",
    role: "Memberr",
    team: "Security",
    status: "active",
    age: "37",
    avatar: "https://i.pravatar.cc/150?img=12",
    email: "oliver.scott@example.com",
    date: "NOV 12, 2023",
    bdcIdNumber: "NO-2345",
    users: 20,
    products: 150,
    percentage: 92,
  },
  {
    id: 14,
    name: "Grace Company",
    role: "Member",
    team: "Marketing",
    status: "active",
    age: "30",
    avatar: "https://i.pravatar.cc/150?img=16",
    email: "grace.allen@example.com",
    date: "NOV 12, 2023",
    bdcIdNumber: "NO-2345",
    users: 820,
    products: 1880,
    percentage: 87,
  },
  {
    id: 15,
    name: "Noah Company",
    role: "Member",
    team: "I. Technology",
    status: "paused",
    age: "31",
    avatar: "https://i.pravatar.cc/150?img=15",
    email: "noah.carter@example.com",
    date: "NOV 12, 2023",
    bdcIdNumber: "NO-2345",
    users: 20,
    products: 180,
    percentage: 52,
  },
  {
    id: 16,
    name: "Ava Company",
    role: "Member",
    team: "Sales",
    status: "active",
    age: "29",
    avatar: "https://i.pravatar.cc/150?img=20",
    email: "ava.perez@example.com",
    date: "NOV 12, 2023",
    bdcIdNumber: "NO-2345",
    users: 70,
    products: 180,
    percentage: 58,
  },
  {
    id: 17,
    name: "Liam Company",
    role: "Member",
    team: "Analysis",
    status: "active",
    age: "28",
    avatar: "https://i.pravatar.cc/150?img=33",
    email: "liam.johnson@example.com",
    date: "NOV 12, 2023",
    bdcIdNumber: "NO-2345",
  },
  {
    id: 18,
    name: "Sophia Companyr",
    role: "Member",
    team: "Testing",
    status: "active",
    age: "27",
    avatar: "https://i.pravatar.cc/150?img=29",
    email: "sophia.taylor@example.com",
    date: "NOV 12, 2023",
    bdcIdNumber: "NO-2345",
    users: 10,
    products: 320,
    percentage: 272,
  },
  {
    id: 19,
    name: "Lucas Company",
    role: "Member",
    team: "Information Technology",
    status: "paused",
    age: "32",
    avatar: "https://i.pravatar.cc/150?img=50",
    email: "lucas.harris@example.com",
    date: "NOV 12, 2023",
    bdcIdNumber: "NO-2345",
    users: 20,
    products: 200,
    percentage: 82,
  },
  {
    id: 20,
    name: "Mia Company",
    role: "Member",
    team: "Operations",
    status: "active",
    age: "26",
    avatar: "https://i.pravatar.cc/150?img=45",
    email: "mia.robinson@example.com",
    date: "NOV 12, 2023",
    bdcIdNumber: "NO-2345",
    users: 20,
    products: 200,
    percentage: 52,
  },
];

export { columns, users, statusOptions };