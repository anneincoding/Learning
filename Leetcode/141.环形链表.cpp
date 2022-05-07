/*
 * @lc app=leetcode.cn id=141 lang=cpp
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
// 哈希表
class Solution {
public:
    bool hasCycle(ListNode *head) {
        if (head == nullptr || head -> next == nullptr) return false;
        ListNode p = head;
        unordered_map<int, int> hashtable;
        while (!hashtable.find(p ->next))
        {
            p = p -> next;
            hashtable[p -> next] = p;
            /* code */
        }
        
    }
};

// 快慢指针
// class Solution {
// public:
//     bool hasCycle(ListNode *head) {
//         if (head == nullptr || head -> next == nullptr) return false;
//         ListNode *slow = head, *fast = head -> next;
//         while (slow != fast)
//         {
//             if (fast == nullptr || fast ->next == nullptr) {
//                 return false;
//             }
//             slow = slow -> next;
//             fast = fast -> next -> next;
//         }
        
//         return true;
//     }
// };

// @lc code=end

