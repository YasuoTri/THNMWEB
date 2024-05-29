body {
    margin: 0;
    font-family: Arial, sans-serif;
}

.scroll-follow {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: #f0f0f0;
    padding: 10px 20px;
    border: 1px solid #ccc;
    display: none;
}

.scroll-follow.active {
    display: block;
}

.target-element {
    padding: 20px;
    background-color: #eee;
    margin-top: 50px;
    text-align: center;
}
