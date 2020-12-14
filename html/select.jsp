<%@page language="java" contenttype ="text/html; charset=UFT-8" pageEncoding="UFT-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>html.select.jsp</title>
</head>
<body>
    <%
    String [] userMajor = request.getParametervalues("major");
    %>

    <%
    for (String user : userMajor) {
    %>
    <h3><%=user%></h3>
    <%
    }
    %>
</body>
</html>