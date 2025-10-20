"use client";
import React from "react";
import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { useParams } from "next/navigation";
import * as db from "../../../../Database";

// Fixing ESLint warning for unused variables
interface User {
  _id: string;
  firstName: string;
  lastName: string;
  loginId: string;
  section: string;
  role: string;
  lastActivity: string;
  totalActivity: string;
}

export default function People() {
  const { cid } = useParams();
  const { users, enrollments } = db;
  console.log("Course ID:", cid);
  console.log("Users:", users);
  console.log("Enrollments:", enrollments);

  const filteredUsers = users.filter((usr) =>
    enrollments.some(
      (enrollment) => enrollment.user === usr._id && enrollment.course === cid
    )
  );
  console.log("Filtered Users:", filteredUsers);
  
  return (
    <div id="wd-people-table">
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th className="wd-full-name">Full Name</th>
            <th className="wd-login-id">Login ID</th>
            <th className="wd-section">Section</th>
            <th className="wd-role">Role</th>
            <th className="wd-last-activity">Last Activity</th>
            <th className="wd-total-activity">Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {users
            .filter((usr) => //  searches the users in the enrollments array based on the user's ID and the user's enrollment in the selected course  
              enrollments.some(
                (enrollment) =>
                  enrollment.user === usr._id && enrollment.course === cid
              )
            )
            .map((user: User) => (
              <tr key={user._id}>
                <td className="wd-full-name text-nowrap">
                  <FaUserCircle className="me-2 fs-1 text-secondary" />
                  <span className="wd-first-name">{user.firstName}</span>
                  <span className="wd-last-name">{user.lastName}</span>
                </td>
                <td className="wd-login-id">{user.loginId}</td>
                <td className="wd-section">{user.section}</td>
                <td className="wd-role">{user.role}</td>
                <td className="wd-last-activity">{user.lastActivity}</td>
                <td className="wd-total-activity">{user.totalActivity}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}