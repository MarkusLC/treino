// ponytail: network-first com fallback de cache, pra abrir na academia sem sinal. Sem versão: cada visita online atualiza o cache.
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request)
      .then(r => { const c = r.clone(); caches.open("treino").then(k => k.put(e.request, c)); return r; })
      .catch(() => caches.match(e.request))
  );
});
