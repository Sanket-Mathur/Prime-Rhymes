<template>
    <div id="link">
        <p>{{ minor }}</p>
        <h5>{{ text }}</h5>
    </div>
</template>

<script>
export default {
    name: 'NavLink',
    props: {
        text: String,
        minor: String,
    }
}
</script>

<style scoped>
#link {
    color: #5A4088;
    text-decoration: none;
    margin-right: 2.5vw;
}
#link h5 {
    font-family: 'Poppins', sans-serif;
    font-size: 2.5vh;
    font-weight: 600;
    margin: 0;
}
#link p {
    font-family: 'Poppins', sans-serif;
    font-size: 1.5vh;
    margin: 0;
}
</style>