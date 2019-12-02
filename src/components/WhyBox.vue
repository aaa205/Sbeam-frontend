<template>
    <div class="why_box text-left">
        <h5>为什么加入 SBEAM？</h5>
        <b-list-group flush="true" class="filters_list">
            <b-list-group-item class="filters_item">购买和下载完整零售游戏</b-list-group-item>
            <b-list-group-item class="filters_item">加入 Sbeam 社区</b-list-group-item>
            <b-list-group-item class="filters_item">游戏时与好友聊天</b-list-group-item>
            <b-list-group-item class="filters_item">在任何电脑上都能玩</b-list-group-item>
            <b-list-group-item class="filters_item">安排游戏、比赛或 LAN 聚会</b-list-group-item>
            <b-list-group-item class="filters_item">获取自动游戏更新以及更多！</b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
    export default {
        name: "WhyBox"
    }
</script>

<style scoped>
    h5 {
        color: white;
        margin-top: 3%;
    }

    .filters_list {
        font-size: 13px;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        color: #bcbcbc;
    }

    .filters_item {
        background-color: #2a2a2a;
    }

    .why_box {
        background: #2a2a2a;
        padding: 4% 4% 8% 4%;
    }
</style>