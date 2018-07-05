<template>
  <div v-cloak>
    <Header :name="headerName"/>
    <div class="m-body">
      <div class="trade-content">
        <div class="trade-top">
          <div class="trade-nav">
            <ul>
              <li><a href="/trade/dayTrade">按天操盘</a></li>
              <li><a class="active" href="/trade/monthTrade">按月操盘</a></li>
            </ul>
          </div>
          <div class="trade-top-title mt10 flex-box">
            <span class="flex">保证金</span>
            <p>可用资金：<span>0</span></p>
          </div>
          <div class="trade-money-list">
            <ul class="clearfix">
              <li class="active">2000</li>
              <li>3000</li>
              <li>5000</li>
              <li>8000</li>
              <li>10000</li>
              <li class="other">其他金额</li>
            </ul>
            <div class="input-group mt10" style="display:none;">
              <input class="input" type="text" placeholder="最少2000，最多300万，百的倍数">
            </div>
          </div>
          <div class="trade-top-title mt10 flex-box">
            <span class="flex">申请资金</span>
          </div>
          <div class="trade-money-list trade-money-time">
            <ul class="clearfix">

              <li class="active">
                <strong>3倍</strong>
                <p>+6000元</p>
              </li>
              <li>
                <strong>4倍</strong>
                <p>+8000元</p>
              </li>
              <li>
                <strong>5倍</strong>
                <p>+10000元</p>
              </li>
              <li>
                <strong>6倍</strong>
                <p>+12000元</p>
              </li>
              <li>
                <strong>7倍</strong>
                <p>+14000元</p>
              </li>
              <li>
                <strong>8倍</strong>
                <p>+16000元</p>
              </li>
              <li>
                <strong>9倍</strong>
                <p>+18000元</p>
              </li>
              <li>
                <strong>10倍</strong>
                <p>+20000元</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="trade-money mt10">
          <div class="money-total">总资金：<strong id="totalMoney">8000.00</strong>元<span>（保证金+申请资金）</span></div>
          <div class="money-detail">
            <div class="money-warn">
              <p>预警线</p>
              <span id="rateWarn">7000.20</span>
            </div>
            <div class="money-openline">
              <p>止损线</p>
              <span id="rateOpenLine">6600.00</span>
            </div>
            <div class="money-lines">
              <div class="lines1"></div>
              <div class="lines2"></div>
            </div>
          </div>
        </div>
        <div class="trade-detail">
          <ul>
            <li>
              <div class="label">单票持仓：</div>
              <p class="flex">主板≤80%,创业板≤60%</p>
            </li>
            <li>
              <div class="label">持仓时间：</div>
              <p class="flex" id="monthtimetip">自动延期</p>
            </li>
            <li>
              <div class="label">收益分配：</div>
              <p class="flex">盈利<span>100</span>%归您</p>
            </li>
            <li>
              <div class="label">管理费：</div>
              <p class="flex"><span id="fee">10.80</span>元 x 2个交易日</p>
            </li>
            <li>
              <div class="label">应付：</div>
              <p class="flex"><span id="paymoney" class="font18 font-red">2021.60</span>元</p>
            </li>
          </ul>
        </div>
        <div class="trade-bottom">
          <div class="check-box">
            <input type="checkbox" id="trade_protocol" name="trade_protocol" checked="checked">
            <label for="trade_protocol">我已阅读并同意<a href="JavaScript:void(0)">《操盘协议》</a></label>
          </div>
          <input type="hidden" id="productid">
          <input type="hidden" id="benjin">
          <a href="JavaScript:void(0);" class="btn mt10">立即申请</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header'
export default {
  data () {
    return {
      headerName: '按月操盘',
      product: [],
      products: [],
      nowProduct: {
        moneyTotal: 0,
        moneyOpenLine: 0,
        moneyWarn: 0,
        moneyFee: 0,
        moneyFees: 0,
        moneyPay: 0
      }
    }
  },
  components: {Header},
  created: function () {
    this.$nextTick(() => {
      this.innitFreeProduct()
    })
  },
  methods: {
    innitFreeProduct: function () {
      let _self = this
      this.$axios.get('/tools/list_ajax.ashx', {act: 'Astock', productType: '1'}, function (response) {
        if (response.status >= 200 && response.status < 300) {
          _self.product = response.data.product
          _self.products = response.data.products
          if (_self.products.length > 0) {
            let prod = _self.nowProduct = _self.products[0]
            prod.moneyTotal = (prod.moneyMin + prod.moneyMax)
            prod.moneyOpenLine = (prod.moneyMin * prod.moneyTimes * prod.rateOpenLine)
            prod.moneyWarn = (prod.moneyMin * prod.moneyTimes * prod.rateWarn)
            prod.moneyFee = (prod.moneyMin * prod.moneyTimes * prod.moneyRate)
            prod.moneyFees = prod.moneyFee * prod.monthMin
            prod.moneyPay = prod.moneyFees + prod.moneyMin
          }
          console.log(_self.nowProduct)
        } else {
          console.log(response.message)
        }
      })
    }
  }
}
</script>
<style src="./trade.css"></style>
