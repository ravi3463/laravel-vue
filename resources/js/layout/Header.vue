<template>
<header class="header">
    <nav class="nav">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/about" class="nav-link">About</router-link>

    </nav>
</header>
</template>

  
<script>
export default {
    name: "Header",

};
</script>

  
<style scoped>
/* Basic reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    padding-top: 60px;
    /* Adjust based on header height */
}

.header {
    background-color: #333;
    padding: 10px 0;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    /* Ensures the header is on top of other content */
}

.nav {
    display: flex;
    justify-content: center;
}

.nav-link {
    color: #fff;
    text-decoration: none;
    padding: 15px 20px;
    font-size: 16px;
    transition: background-color 0.3s ease;
    /* Smooth transition for hover effect */
}

.nav-link:hover {
    background-color: #575757;
    border-radius: 4px;
}
</style>
