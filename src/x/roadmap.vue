<template>
	<div>
    <section class="container">
      <div class="roadmap">
        <ul class="roadmap-list" v-for="(roadmap, index) of roadmaps" :key="index">
          <li>
            <div class="roadmap-date">
             {{ roadmap.date }}
            </div>
            <div class="roadmap-title">
              {{ roadmap.title }}
            </div>
            <div class="roadmap-desc">
              {{ roadmap.description }}
            </div>
          </li>
        </ul>
      </div>
    </section>
	</div>
</template>

<style>

.roadmap {
  margin-bottom: 120px;
  margin-left: 80px;
  margin-right: 80px;
  margin-top: 120px;
}
.roadmap .roadmap-list {
  margin-bottom: 48px;
  border-left: 3px solid #f1f1f1;
  padding-left: 24px;
}

.roadmap .roadmap-list li{
  margin-bottom: 24px;
  position: relative;
  padding-bottom: 24px;
  padding-left: 24px;
}

.roadmap .roadmap-list li::before{
  content: "";
  width: 16px;
  height: 16px;
  position: absolute;
  background-color: #27ae60;
  top: 2px;
  left: -34px;
  border-radius: 50%;
}

.roadmap .roadmap-list li .roadmap-date{
  font-size: 14px;
  font-style: italic;
  color: #888;
}

.roadmap .roadmap-list li .roadmap-title{
  font-size: 18px;
  font-weight: 600;
  margin: 8px 0;
} 

</style>


<script>
export default {
	data() {
		return {
			roadmaps: [
				{
					title: 'Coming soon',
					date: '1st Jan 2020',
          description: 'Coming soon'
				}
			],
		};
	},
};
</script>