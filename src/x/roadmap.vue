<template>
	<div>
		<section class="hero is-medium">
			<div class="hero-body">
				<div class="container">
					<div class="columns is-vcentered">
						<div class="column">
							<img src="https://i.pinimg.com/originals/17/33/f4/1733f4de8ce6f10ed3b2ffe875c1a8e6.gif" />
						</div>

						<div class="column is-offset-1">
							<div class="title">
								<strong>ROAD MAP</strong>
							</div>
							<hr />
							<div class="content">
                Our roadmap is a planned where we take on the most complex problems and turn them into great solutions
              </div>
						</div>
					</div>
				</div>
			</div>
		</section>
    <section class="container">
      <div class="roadmap">
        <ul class="roadmap-list">
          <li>
            <div class="roadmap-date">
             4th January, 2021
            </div>
            <div class="roadmap-title">
              Coming soon
            </div>
          </li>
          <li class="current">
            <div class="roadmap-date">
             10 January, 2021
            </div>
            <div class="roadmap-title">
              Coming soon
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

.roadmap .roadmap-list li.current::before{
  background-color: blue;
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