参与：xx，逃税奸商，温柔的小狮子（CodyShi）

##### dnspy

使用 dnspy 打开游戏文件Stone Story RPG\Stone Story_Data\Managed\Assembly-CSharp.dll



`Ctrl+Shift+K` 搜索

`Ctrl+Shift+E` 编辑



##### 修改箱子

搜索 `GetTreasurePickupLimit`   

`return`   目标箱子上限，改成5700



##### 只获得彩虹箱子

离线不会获得彩虹以下的箱子

搜索 `OfflineFarmController.ProcessRewards`

```
if (treasureWithId.type > TreasureItem.Type.Epic) 
```

修改为

```
if (treasureWithId.type > TreasureItem.Type.Epic || treasureWithId.type < TreasureItem.Type.Epic)
```

并删除

    SequentialPopupManager.singleton.ScheduleOfflineFarmRewards(rewardsInfo);





##### 快速开箱

`MIN_TREASURES_FOR_FAST_FORWARD ` 快速开箱下限，改成0

`TREASURE_COUNT_TO_FAST_FORWARD ` 快速开箱上限，改成10000

`PRICE_PER_TREASURE_FAST_FORWARD` 快速开箱气消耗，改成0



##### 沙漏

搜索 `HourglassController`

删除 `Inventory.Singleton.RemoveItem(firstItemWithId, 1);`



搜索 `HourglassBonus`，选择 `offlineFarmController`的函数

将(24,0,0)和(1,0,0)修改成(2400,0,0)



搜索 `ShouldShowHourglassButton()`

删除两个 `if`的全部内容



##### 月华花苞转换月华

搜索 `HandleUseItemPressed`，选择 `MoonbloomBudItem` 的函数

删除 `Inventory.Singleton.RemoveItem(this, 1);`



##### 双附魔不消耗花瓣

搜索 `CalculatePetalCost`

把 `return ItemData.Rarity.GetPetalCount(endingEnchantmentLevel) - ItemData.Rarity.GetPetalCount(startingEnchantmentLevel)`改为 `return 0;`



##### 快速附魔

搜索 `SetTriskelionState`

最后一句`this.elapsedFissureStateTics = 0` 改成  999



##### 快速分解

搜索 `SetFissureState`

最后一句`this.elapsedFissureStateTics = 0` 改成  999

同页面 `Ctrl+F`搜索 `&& this.elapsedFissureStateTics == 11`删除



##### 快速开箱

搜索 `SetTreasureState`

倒数第二句 `this.treasureStateElapsedTics = 0 `改成 999



##### 每日水晶获取

搜索 `HandleOnSlotPressed`，选择 `UulaaShopScreen`的函数

其中 `Inventory.Singleton.GainItem(item, 1, true)`改成 `Inventory.Singleton.GainItem(item, 9999, true)`



##### 奖励获取倒计时

搜索 `TreasureFactory` 类的最下面

