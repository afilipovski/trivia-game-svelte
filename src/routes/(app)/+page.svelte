<script>
  let username, roomName;
</script>

<div>
  <div class="flex flex-col items-center">
    <label>Username:<input type="text" bind:value={username} class="m-3 border-black border-2" ></label>
    <label>Room name:<input type="text" bind:value={roomName} class="m-3 border-black border-2" ></label>
    <a href={`game/${roomName}`}>Go to Room</a>
  </div>
</div>
