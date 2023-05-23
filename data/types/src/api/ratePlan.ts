import { eg, TypeFromCodec } from '@cloudflare/util-en-garde';

export const PlanId = eg.union([
  eg.literal('free'),
  eg.literal('pro'),
  eg.literal('business'),
  eg.literal('enterprise'),
  eg.literal('enterprise_trial'),
  eg.literal('lite'),
  eg.literal('pro_plus'),
  eg.literal('partners_free'),
  eg.literal('partners_pro'),
  eg.literal('partners_biz'),
  eg.literal('partners_ent')
]);
export type PlanId = TypeFromCodec<typeof PlanId>;

export const CfPlanId = eg.union([
  eg.literal('cf_biz'),
  eg.literal('CF_BIZ'),
  eg.literal('cf_biz_emp'),
  eg.literal('CF_BIZ_EMP'),
  eg.literal('cf_biz_free'),
  eg.literal('CF_BIZ_FREE'),
  eg.literal('cf_biz_galileo'),
  eg.literal('CF_BIZ_GALILEO'),
  eg.literal('cf_biz_plus'),
  eg.literal('CF_BIZ_PLUS'),
  eg.literal('cf_ent'),
  eg.literal('CF_ENT'),
  eg.literal('cf_ent_trial'),
  eg.literal('CF_ENT_TRIAL'),
  eg.literal('cf_free'),
  eg.literal('CF_FREE'),
  eg.literal('cf_pro_20_20'),
  eg.literal('CF_PRO_20_20'),
  eg.literal('cf_pro_20_5'),
  eg.literal('CF_PRO_20_5'),
  eg.literal('cf_pro_free'),
  eg.literal('CF_PRO_FREE'),
  eg.literal('cf_lite'),
  eg.literal('CF_LITE'),
  eg.literal('cf_pro_plus'),
  eg.literal('CF_PRO_PLUS')
]);
export type CfPlanId = TypeFromCodec<typeof CfPlanId>;

export const ProductPlanId = eg.union([
  eg.literal('access_basic'),
  eg.literal('ACCESS_BASIC'),
  eg.literal('access_ent'),
  eg.literal('ACCESS_ENT'),
  eg.literal('access_free'),
  eg.literal('ACCESS_FREE'),
  eg.literal('access_premium'),
  eg.literal('ACCESS_PREMIUM'),
  eg.literal('access_ent_paygo'),
  eg.literal('ACCESS_ENT_PAYGO'),
  eg.literal('access_ent_contract'),
  eg.literal('ACCESS_ENT_CONTRACT'),
  eg.literal('ADVANCED_CERT_MANAGER'),
  eg.literal('ADVANCED_CERT_MANAGER_FREE'),
  eg.literal('ADVANCED_CERT_MANAGER_GF'),
  eg.literal('argo'),
  eg.literal('ARGO'),
  eg.literal('argo_basic'),
  eg.literal('ARGO_BASIC'),
  eg.literal('argo_free'),
  eg.literal('ARGO_FREE'),
  eg.literal('argo_zone_basic'),
  eg.literal('ARGO_ZONE_BASIC'),
  eg.literal('argo_zone_free'),
  eg.literal('ARGO_ZONE_FREE'),
  eg.literal('argo_ent_paygo'),
  eg.literal('ARGO_ENT_PAYGO'),
  eg.literal('argo_ent_contract'),
  eg.literal('ARGO_ENT_CONTRACT'),
  eg.literal('browser_blaster_basic'),
  eg.literal('BROWSER_BLASTER_BASIC'),
  eg.literal('load_balancing_basic'),
  eg.literal('LOAD_BALANCING_BASIC'),
  eg.literal('load_balancing_basic_plus'),
  eg.literal('LOAD_BALANCING_BASIC_PLUS'),
  eg.literal('load_balancing_free'),
  eg.literal('LOAD_BALANCING_FREE'),
  eg.literal('rate_limiting'),
  eg.literal('RATE_LIMITING'),
  eg.literal('rate_limiting_basic'),
  eg.literal('RATE_LIMITING_BASIC'),
  eg.literal('rate_limiting_free'),
  eg.literal('RATE_LIMITING_FREE'),
  eg.literal('rate_limiting_ent_paygo'),
  eg.literal('RATE_LIMITING_ENT_PAYGO'),
  eg.literal('rate_limiting_ent_contract'),
  eg.literal('RATE_LIMITING_ENT_CONTRACT'),
  eg.literal('stream_basic'),
  eg.literal('STREAM_BASIC'),
  eg.literal('stream_ent'),
  eg.literal('STREAM_ENT'),
  eg.literal('stream_free'),
  eg.literal('STREAM_FREE'),
  eg.literal('waiting_rooms_fairshot'),
  eg.literal('WAITING_ROOMS_FAIRSHOT'),
  eg.literal('waiting_rooms_basic'),
  eg.literal('WAITING_ROOMS_BASIC'),
  eg.literal('waiting_rooms_adv'),
  eg.literal('WAITING_ROOMS_ADV'),
  eg.literal('workers_basic'),
  eg.literal('WORKERS_BASIC'),
  eg.literal('workers_ent'),
  eg.literal('WORKERS_ENT'),
  eg.literal('workers_free'),
  eg.literal('WORKERS_FREE'),
  eg.literal('WORKERS_ENT_PAYGO'),
  eg.literal('workers_ent_paygo'),
  eg.literal('WORKERS_ENT_CONTRACT'),
  eg.literal('workers_ent_contract'),
  eg.literal('workers_paid'),
  eg.literal('WORKERS_PAID'),
  eg.literal('workers_paid_nocost'),
  eg.literal('WORKERS_PAID_NOCOST'),
  eg.literal('WORKERS_PAID_ENT_PAYGO'),
  eg.literal('workers_paid_ent_paygo'),
  eg.literal('WORKERS_PAID_ENT_CONTRACT'),
  eg.literal('workers_paid_ent_contract'),
  eg.literal('workers_trial'),
  eg.literal('images_basic'),
  eg.literal('IMAGES_BASIC'),
  eg.literal('images_ent'),
  eg.literal('IMAGES_ENT'),
  eg.literal('images_nocost'),
  eg.literal('IMAGES_NOCOST'),
  eg.literal('images_stream_basic'),
  eg.literal('IMAGES_STREAM_BASIC'),
  eg.literal('images_stream_ent'),
  eg.literal('IMAGES_STREAM_ENT'),
  eg.literal('images_stream_nocost'),
  eg.literal('IMAGES_STREAM_NOCOST'),
  eg.literal('images_stream_bundle_basic'),
  eg.literal('IMAGES_STREAM_BUNDLE_BASIC'),
  eg.literal('images_stream_bundle_advanced'),
  eg.literal('IMAGES_STREAM_BUNDLE_ADVANCED'),
  eg.literal('images_stream_bundle_ent'),
  eg.literal('IMAGES_STREAM_BUNDLE_ENT'),
  eg.literal('images_stream_bundle_nocost'),
  eg.literal('IMAGES_STREAM_BUNDLE_NOCOST'),
  eg.literal('ssl_for_saas_basic'),
  eg.literal('SSL_FOR_SAAS_BASIC'),
  eg.literal('TEAMS_FREE'),
  eg.literal('teams_free'),
  eg.literal('TEAMS_STANDARD_FREE'),
  eg.literal('teams_standard_free'),
  eg.literal('CACHE_RESERVE_PAID'),
  eg.literal('cache_reserve_paid'),
  eg.literal('CACHE_RESERVE_ENT'),
  eg.literal('cache_reserve_ent'),
  eg.literal('CACHE_RESERVE_NOCOST'),
  eg.literal('cache_reserve_nocost'),
  eg.literal('r2_paid'),
  eg.literal('R2_PAID'),
  eg.literal('R2_ENT_CONTRACT'),
  eg.literal('r2_ent_contract'),
  eg.literal('R2_ENT_PAYGO'),
  eg.literal('r2_ent_paygo'),
  eg.literal('R2_NOCOST'),
  eg.literal('r2_nocost'),
  eg.literal('web3_ipfs_basic'),
  eg.literal('WEB3_IPFS_BASIC'),
  eg.literal('web3_ipfs_premium'),
  eg.literal('WEB3_IPFS_PREMIUM'),
  eg.literal('web3_ethereum_basic'),
  eg.literal('WEB3_ETHEREUM_BASIC'),
  eg.literal('web3_ethereum_premium'),
  eg.literal('WEB3_ETHEREUM_PREMIUM'),
  eg.literal('beta_analytics_engine_api'),
  eg.literal('BETA_ANALYTICS_ENGINE_API'),
  eg.literal('LOAD_BALANCING_ENT_TRYOUT'),
  eg.literal('load_balancing_ent_tryout'),
  eg.literal('STREAM_ENT_TRYOUT'),
  eg.literal('stream_ent_tryout'),
  eg.literal('argo_zone_ent_tryout'),
  eg.literal('ARGO_ZONE_ENT_TRYOUT'),
  eg.literal('IMAGES_ENT_TRYOUT'),
  eg.literal('images_ent_tryout'),
  eg.literal('advanced_cert_manager_tryout'),
  eg.literal('ADVANCED_CERT_MANAGER_TRYOUT'),
  eg.literal('BOT_ZONE_ENT_TRYOUT'),
  eg.literal('bot_zone_ent_tryout'),
  eg.literal('workers_paid_ent_tryout'),
  eg.literal('WORKERS_PAID_ENT_TRYOUT'),
  eg.literal('api_shield_zone_tryout'),
  eg.literal('API_SHIELD_ZONE_TRYOUT'),
  eg.literal('ssl_for_saas_advanced_tryout'),
  eg.literal('SSL_FOR_SAAS_ADVANCED_TRYOUT'),
  eg.literal('WAITING_ROOMS_ADV_TRYOUT'),
  eg.literal('waiting_rooms_adv_tryout'),
  eg.literal('web3_ethereum_ent_tryout'),
  eg.literal('WEB3_ETHEREUM_ENT_TRYOUT'),
  eg.literal('web3_ipfs_ent_tryout'),
  eg.literal('WEB3_IPFS_ENT_TRYOUT'),
  eg.literal('QUEUES_PAID'),
  eg.literal('queues_paid'),
  eg.literal('queues_ent_tryout'),
  eg.literal('QUEUES_ENT_TRYOUT'),
  eg.literal('ratelimiting_advanced_ent_tryout'),
  eg.literal('RATELIMITING_ADVANCED_ENT_TRYOUT'),
  eg.literal('teams_ent_tryout'),
  eg.literal('TEAMS_ENT_TRYOUT')
]);
export type ProductPlanId = TypeFromCodec<typeof ProductPlanId>;

export const RatePlanId = eg.union([PlanId, CfPlanId, ProductPlanId]);
export type RatePlanId = TypeFromCodec<typeof RatePlanId>;

export const RatePlanComponentTier = eg.object({
  lowerThreshold: eg.number,
  upperThreshold: eg.number,
  pricingType: eg.string,
  price: eg.number,
  annual_price: eg.number.optional,
  bucketSize: eg.number
});

export type RatePlanComponentTier = TypeFromCodec<typeof RatePlanComponentTier>;

// BILL-17675 -- Support GRANDFATHER discount if hasInstallBaseCustomerFlag
//               This discount is available until May 15, 2023.
export const RatePlanDiscounts = eg.object({
  GRANDFATHER: eg.array(RatePlanComponentTier)
});
export type RatePlanDiscounts = TypeFromCodec<typeof RatePlanDiscounts>;

export const RatePlanComponent = eg.object({
  name: eg.string,
  publicName: eg.string,
  type: eg.string,
  key: eg.string,
  chargeType: eg.string,
  chargeModel: eg.string,
  unitOfMeasure: eg.string,
  defaultQuantity: eg.number,
  cfStartOfFirstUnit: eg.number,
  cfUsageDivisor: eg.number,
  tiers: eg.array(RatePlanComponentTier),
  discounts: RatePlanDiscounts
});

export type RatePlanComponent = TypeFromCodec<typeof RatePlanComponent>;

export const RatePlan = eg.object({
  id: RatePlanId,
  public_name: eg.string,
  currency: eg.literal('USD'),
  components: eg.array(RatePlanComponent)
});

export type RatePlan = TypeFromCodec<typeof RatePlan>;
