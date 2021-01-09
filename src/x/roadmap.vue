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
        <h1 class="upcom">Upcoming</h1>
        <ul class="roadmap-list upcomming" v-for="(roadmap, index) of roadmapsup" :key="index">
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
  padding-bottom: 16px;
  border-left: 3px solid #0652DD;
  padding-left: 24px;
}

.roadmap .roadmap-list li{
  position: relative;
  padding-bottom: 24px;
  padding-left: 24px;
}

.roadmap .roadmap-list li::before{
  content: "";
  width: 20px;
  height: 20px;
  position: absolute;
  background-color: #0652DD;
  border: 2px solid #fff;
  top: 0px;
  left: -35px;
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

.roadmap .roadmap-list.upcomming {
  padding-bottom: 16px;
  border-left: 3px solid #bdbdbd;
  padding-left: 24px;
}

.upcom {
  padding-top: 36px;
  padding-bottom: 36px;
  border-left: 3px solid #bdbdbd;
  padding-left: 48px;
  font-size: 24px;
  font-weight: 700;
  color: #27ae60;
}

.roadmap .roadmap-list.upcomming li::before{
  background-color: #666666;
}

</style>


<script>
export default {
	data() {
		return {
			roadmaps: [
        {
					title: 'Protocol Development',
					date: 'February 15, 2020',
          description: 'Started the development of thirm protocol.'
				},

        {
					title: 'Token Creation',
					date: 'May 17, 2020',
          description: 'Created the THIRM token.'
				},

        {
					title: 'BETA Release',
					date: 'August 28, 2020',
          description: 'Released the beta version of the DAPP.'
				},

        {
					title: 'Stateofthedapps Listing',
					date: 'September 6, 2020',
          description: 'Listed THIRM protocol on "stateofthedapps".'
				},

        {
					title: 'Uniswap Listing',
					date: 'September 27, 2020',
          description: 'Listed THIRM protocol on "uniswap".'
				},
			],

      roadmapsup: [
        {
					title: 'Coming soon',
					date: 'January 15, 2021',
          description: 'Coming soon.'
				},

			],
		};
	},
};
</script>