<!DOCTYPE HTML>
<html>
<head>
	<meta charset="UTF-8">
	<title>Pages</title>
	<link rel="stylesheet" href="stylesheet/style.css">
    <script type="text/javascript" src="http://www.google.com/jsapi"></script>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
    <script type="text/javascript" src="loadjson.js"></script>
    <script type="application/javascript">
                request_page(Math.floor(Math.random() * 9) + 1); 
    </script>
</head>
<body>
    <ul class="niveau1 ">
      <li class="pages">
        Pages
        <ul class="niveau2">
        
          <?php
            $i = 1;
            while ($i < 11)
            {
                echo "<li id='page".$i."' onclick='request_page(".$i.")'> Page ".$i."</li>";
                $i++;
            }
          ?>
          </ul>
      </li> 
                <table style="width:100%">
                <tr>
              <th>Id</th>
              <th>Latitude</th> 
              <th>Longitude</th>
              <th>Title</th>
              <th>Rent</th> 
              <th>Isrented</th>
              <th>Has_360</th>
              <th>Photo_360</th> 
            </tr>
                <?php
                $i = 0;
                while ($i < 10)
                {
                    echo "<tr>";
                    echo "<td id = 'id".$i."'></td>";
                    echo "<td id = 'lat".$i."'></td>";
                    echo "<td id = 'long".$i."'></td>";
                    echo "<td id = 'title".$i."'></td>";
                    echo "<td id = 'rent".$i."'></td>";
                    echo "<td id = 'isrented".$i."'></td>";
                    echo "<td id = 'h_360".$i."'></td>";
                    echo "<td><img id='photo_360".$i."' src='' height='100' width='100'></td>";
                    echo "</tr>";
                    $i++;
                }
                ?>
        </table>
</body>
</html>
