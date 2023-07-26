<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Max-Age: 1000');
header(
    'Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding'
);
header('Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE');

$con = mysqli_connect(
    'localhost',
    'mqmgukdk_egyapan',
    'egyapanNepal',
    'mqmgukdk_egyapan_nepal'
);
if (!$con) {
    $jsonResponse = [
        'code' => '601',
        'message' => 'Unexpected Error, Please try again.',
    ];
} else {
    $query = 'SELECT * FROM posts';
    $result = mysqli_query($con, $query);
    if (mysqli_num_rows($result) != 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            $id = $row['id'];
            $title = $row['title'];
            $body = $row['body'];
            $author = $row['author'];

            $post = [
                'id' => "$id",
                'title' => "$title",
                'body' => "$body",
                'author' => "$author",
            ];

            $posts[] = $post;
        }
        $jsonResponse['posts'] = $posts;
    } else {
        $jsonResponse = [
            'code' => '619',
            'message' => 'Invalid Customer ID, Please try again.',
        ];
    }
}
?>
