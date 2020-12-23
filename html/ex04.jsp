<%@ page language ="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>html/ex04.html</title>

</head>
<body>
   <%
   String userName = request.getParameter("user_name");
   String userToday = request.getParameter("user_today");
   String userSex = request.getParameter("user_sex");
   String userEmail = request.getParameter("user_email");
 
   <%
    String[] userMobile1 = request.getParameterValues("mobile1");
    %>
    <%
    for (String user : userMobile1) {
    %>
    <h3><%=user%></h3>
    <%
    }
    %>

    <%
    String[] userJob = request.getParameterValues("job");
    %>
    <%
    for (String user : userJob) {
    %>
    <h3><%=user%></h3>
    <%
    }
    %>

    <%
        String[] userHobby = request.getParameterValues("hobby");
    %>
    <%
    for (String user : userHobby) {
    %>
    <h3><%=user%></h3>
    <%
    }
    %>
    %>
    <%
        String[] userHobby = request.getParameterValues("so");
    %>
    <%
    for (String user : userSo) {
    %>
    <h3><%=user%></h3>
    <%
    }
    %>
    %>
    
</body>
</html>