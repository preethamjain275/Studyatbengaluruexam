import { Route } from "../src/routes/api/health";

async function testHealthEndpoint() {
  console.log("=== PRIORITY 6: HEALTH & READINESS ENDPOINT VERIFICATION ===\n");

  const handler = (Route.options.server as any)?.handlers?.GET;
  if (!handler) {
    throw new Error("No GET handler found on /api/health Route");
  }

  // 1. Test Process Liveness Probe
  console.log("1. Testing Process Liveness Probe (GET /api/health)...");
  const livenessReq = new Request("http://localhost:3000/api/health");
  const livenessRes: Response = await handler({ request: livenessReq });
  const livenessBody = await livenessRes.json();
  console.log(`   HTTP Status: ${livenessRes.status}`);
  console.log(`   Response Body:`, JSON.stringify(livenessBody, null, 2));

  if (livenessRes.status === 200 && livenessBody.status === "ok" && livenessBody.checks.process === "healthy") {
    console.log("   ✓ PASSED: Liveness probe is operational.");
  } else {
    console.error("   ✕ FAILED: Liveness probe returned abnormal response.");
  }

  // 2. Test Dependency Readiness Probe
  console.log("\n2. Testing Dependency Readiness Probe (GET /api/health?probe=readiness)...");
  const readinessReq = new Request("http://localhost:3000/api/health?probe=readiness");
  const readinessRes: Response = await handler({ request: readinessReq });
  const readinessBody = await readinessRes.json();
  console.log(`   HTTP Status: ${readinessRes.status}`);
  console.log(`   Response Body:`, JSON.stringify(readinessBody, null, 2));

  if (readinessRes.status === 200 && readinessBody.status === "ok" && readinessBody.checks.database === "connected") {
    console.log("   ✓ PASSED: Readiness probe successfully verified live database connectivity.");
  } else {
    console.error("   ✕ FAILED: Readiness probe failed to connect to database.");
  }

  console.log("\n==============================================================");
}

testHealthEndpoint().catch(console.error);
