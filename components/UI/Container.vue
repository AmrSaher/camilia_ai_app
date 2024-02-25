<template>
    <div class="UIContainer px-4 mx-auto max-sm:px-0">
        <slot />
    </div>
</template>

<style scoped>
@media (min-width: 768px){
    .UIContainer {
        width: 750px;
    }
}
@media (min-width: 992px) {
    .UIContainer {
        width: 970px;
    }
}
@media (min-width: 1200px){
    .UIContainer {
        width: 1170px;
    }
}
</style>